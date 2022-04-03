package com.example.isuuer.service.impl;

import com.example.isuuer.bean.DidDocument;
import com.example.isuuer.bean.DomainAsset;
import com.example.isuuer.service.AssetService;
import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AssetServiceImplTest {
    @Autowired
    AssetService assetService;

    @Test
    void getAllAssets() {
    }

    @Test
    void getAsset() {
    }

    @Test
    void addAsset() {
    }

    @Test
    void generateProof() {
    }

    @Test
    void generateDID() {
    }

    @Test
    void testGenerateDID() throws Exception {
        DomainAsset domainAsset = new DomainAsset("did:dns:1", "example.com", "", "", "");
        DidDocument didDocument = assetService.generateDID(domainAsset);
        System.out.println(new Gson().toJson(didDocument));
    }
}