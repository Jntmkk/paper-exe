package com.example.isuuer.service.impl;

import com.example.isuuer.bean.AssetProof;
import com.example.isuuer.bean.DidDocument;
import com.example.isuuer.bean.DomainAsset;
import com.example.isuuer.service.AssetService;
import com.example.isuuer.service.IPFSService;
import com.example.isuuer.utils.SignUtils;
import com.google.gson.Gson;
import org.apache.commons.codec.binary.Hex;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.KeyPair;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

/**
 * @author ywb
 */
@Service
public class AssetServiceImpl implements AssetService {
    static KeyPair keyPair;
    @Autowired
    IPFSService ipfsService;

    static {
        try {
            keyPair = SignUtils.loadKeyPair("./");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    ConcurrentHashMap<String, DomainAsset> map = new ConcurrentHashMap<>();

    {
        map.put("did:dns:example.com", new DomainAsset("did:dns:example.com", "domain example.com", "https://api.whh.buzz/api/asset/valid?id=example.com", null, null));
        map.put("did:dns:example2.com", new DomainAsset("did:dns:example2.com", "domain example2.com", "https://api.whh.pw/api/asset/valid?id=example2.com", null, null));
        map.put("did:dns:example3.com", new DomainAsset("did:dns:example3.com", "domain example3.com", "https://api.whh.pw/api/asset/valid?id=example3.com", null, null));
        map.put("did:dns:example4.com", new DomainAsset("did:dns:example4.com", "domain example4.com", "https://api.whh.pw/api/asset/valid?id=example4.com", null, null));
    }

    @Override
    public List<DomainAsset> getAllAssets() {
        return map.values().stream().collect(Collectors.toList());
    }

    @Override
    public DomainAsset getAsset(String did) {
        return map.get(did);
    }

    @Override
    public void addAsset(DomainAsset asset) {
        map.put(asset.getName(), asset);
    }

    @Override
    public AssetProof generateProof(DomainAsset asset) throws Exception {
        byte[] sign = SignUtils.sign(keyPair.getPrivate(), asset.getDid());
        return new AssetProof(Hex.encodeHexString(sign));
    }

    @Override
    public DidDocument generateDID(DomainAsset asset) throws Exception {
        AssetProof assetProof = generateProof(asset);
        return new DidDocument(asset, assetProof);
    }

    @Override
    public String linkAsset(DomainAsset asset) throws Exception {
        DidDocument didDocument = generateDID(asset);
        String s = new Gson().toJson(didDocument);
        String ipfs = ipfsService.addString(s);
        asset.setIpfs(ipfs);
        map.put(asset.getDid(), asset);
        return ipfs;
    }
}
