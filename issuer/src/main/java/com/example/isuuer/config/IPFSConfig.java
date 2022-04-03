package com.example.isuuer.config;

import io.ipfs.api.IPFS;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;

@Configuration
public class IPFSConfig {
    @Value("${ipfs.url}")
    String url;

    @Bean
    public IPFS ipfs() throws IOException {
        IPFS ipfs = new IPFS(url);
        ipfs.refs.local();
        return ipfs;
    }

}
