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
public class DomainAsset {
    private String did;
    private String name;
    private String url;
    private String ipfs;
    private String address;
}
