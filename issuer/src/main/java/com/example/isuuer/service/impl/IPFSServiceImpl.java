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
import java.nio.charset.StandardCharsets;

@Service
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
    public String addFile(File file) throws IOException {
        NamedStreamable.FileWrapper wp = new NamedStreamable.FileWrapper(file);
        MerkleNode addResult = ipfs.add(wp).get(0);
        return addResult.hash.toString();
    }

    @Override
    public String addString(String data) throws IOException {
        NamedStreamable.ByteArrayWrapper byteArrayWrapper = new NamedStreamable.ByteArrayWrapper(data.getBytes(StandardCharsets.UTF_8));
        MerkleNode merkleNode = ipfs.add(byteArrayWrapper).get(0);
        return merkleNode.hash.toString();
    }

    @Override
    public MerkleNode addBytes(byte[] bytes) throws IOException {
        NamedStreamable.ByteArrayWrapper file = new NamedStreamable.ByteArrayWrapper(bytes);
        MerkleNode addResult = ipfs.add(file).get(0);
        return addResult;
    }
}
