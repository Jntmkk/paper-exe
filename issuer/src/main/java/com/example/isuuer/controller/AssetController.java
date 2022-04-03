package com.example.isuuer.controller;

import com.example.isuuer.bean.DemoBean;
import com.example.isuuer.bean.DidDocument;
import com.example.isuuer.bean.DomainAsset;
import com.example.isuuer.service.AssetService;
import com.example.isuuer.service.IPFSService;
import io.ipfs.api.IPFS;
import io.ipfs.multihash.Multihash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

/**
 *
 */
@RestController
@RequestMapping("/api/asset")
public class AssetController {
    /**
     * 上链获取 IPFS 地址，
     *
     * @param asset 需要完整的 asset ,其中包含三个字段  did name url
     * @return
     * @throws Exception
     */
    @PostMapping("/did")
    public String uplink(@RequestBody DomainAsset asset) throws Exception {
        return assetService.linkAsset(asset);
    }

    /**
     * 获取已有资产
     *
     * @return
     */
    @GetMapping("/all")
    public List<DomainAsset> all() {
        return assetService.getAllAssets();
    }

    //    @Autowired
//    IPFSService ipfsService;
    @Autowired
    AssetService assetService;

    @GetMapping("/valid")
    public DemoBean getPrice() {
        return new DemoBean(123, 123);
    }


    @PostMapping("/")
    public void create(@RequestBody DomainAsset asset) {
        assetService.addAsset(asset);
    }


}
