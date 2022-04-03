package com.example.isuuer.service;

import com.example.isuuer.bean.AssetProof;
import com.example.isuuer.bean.DidDocument;
import com.example.isuuer.bean.DomainAsset;

import java.util.List;

/**
 * @author ywb
 */
public interface AssetService {
    /**
     * get all assets
     *
     * @return
     */
    List<DomainAsset> getAllAssets();

    /**
     * get asset by id
     *
     * @param domain
     * @return
     */
    DomainAsset getAsset(String domain);

    /**
     * add asset
     *
     * @param id
     * @param asset
     * @return
     */
    void addAsset(DomainAsset asset);

    /**
     * generate proof
     *
     * @param asset asset id
     * @return
     */
    AssetProof generateProof(DomainAsset asset) throws Exception;

    /**
     * generateDID
     *
     * @param asset
     * @return
     */
    DidDocument generateDID(DomainAsset asset) throws Exception;

    /**
     * @param asset
     * @return
     */
    String linkAsset(DomainAsset asset) throws Exception;
}
