package com.example.isuuer.service.impl;

import com.example.isuuer.bean.AssetProof;
import com.example.isuuer.bean.DidDocument;
import com.example.isuuer.bean.DomainAsset;
import com.example.isuuer.service.AssetService;
import com.example.isuuer.utils.SignUtils;
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

    static {
        try {
            keyPair = SignUtils.loadKeyPair("./");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    ConcurrentHashMap<String, DomainAsset> map = new ConcurrentHashMap<>();


    @Override
    public List<DomainAsset> getAllAssets() {
        return map.values().stream().collect(Collectors.toList());
    }

    @Override
    public DomainAsset getAsset(String domain) {
        return map.get(domain);
    }

    @Override
    public void addAsset(DomainAsset asset) {
        map.put(asset.getName(), asset);
    }

    @Override
    public AssetProof generateProof(DomainAsset asset) throws Exception {
        byte[] sign = SignUtils.sign(keyPair.getPrivate(), asset.getDid());
        return new AssetProof(new String(sign));
    }

    @Override
    public DidDocument generateDID(DomainAsset asset) throws Exception {
        AssetProof assetProof = generateProof(asset);
        return new DidDocument(asset, assetProof);
    }

    @Override
    public void linkAsset(DomainAsset asset) {

    }
}
