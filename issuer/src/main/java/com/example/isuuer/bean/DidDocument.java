package com.example.isuuer.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author ywb
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
public class DidDocument {
    private String did;
    private String version = "1";
    private String address;
    private AssetProof proof;

    public DidDocument(DomainAsset asset, AssetProof proof) {
        this.proof = proof;
        this.address = asset.getAddress();
        this.did = asset.getDid();
    }
}
