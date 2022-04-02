package com.example.isuuer.service.impl;

import com.example.isuuer.service.IPFSService;
import io.ipfs.api.IPFS;
import io.ipfs.api.MerkleNode;
import io.ipfs.api.NamedStreamable;
import io.ipfs.multihash.Multihash;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.util.StringUtils;


import java.io.File;
import java.io.IOException;

//@Service
@Data
public class IPFSServiceImpl implements IPFSService {
    @Autowired
    public IPFS ipfs;

    @Override
    public byte[] catFile(String hash) throws IOException {
        if (StringUtils.isEmpty(hash)) {
            return new byte[0];
        }
        Multihash multihash = Multihash.fromBase58(hash);
        return ipfs.cat(multihash);
    }

    @Override
    public MerkleNode addFile(File file) throws IOException {
        NamedStreamable.FileWrapper wp = new NamedStreamable.FileWrapper(file);
        MerkleNode addResult = ipfs.add(wp).get(0);
        return addResult;
    }

    @Override
    public MerkleNode addBytes(byte[] bytes) throws IOException {
        NamedStreamable.ByteArrayWrapper file = new NamedStreamable.ByteArrayWrapper(bytes);
        MerkleNode addResult = ipfs.add(file).get(0);
        return addResult;
    }
}
