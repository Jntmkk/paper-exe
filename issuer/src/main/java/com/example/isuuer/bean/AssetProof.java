package com.example.isuuer.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


/**
 * @author ywb
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AssetProof {
    private String creator = "did:dns";
    private String type = "SHA1withECDSA";
    private String signature;

    public AssetProof(String signature) {
        this.signature = signature;
    }
}
