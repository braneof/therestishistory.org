---
layout: post
title: First post, testing the system
excerpt: This is testing out if this is working excerpt
audioFile: rtmp://sa4it37dwxbm5.cloudfront.net/cfx/st/130803_0099.mp3
---

{{ page.title }}
================

<p class="meta">24 Apr 2014 - Cleveland, OH</p>

<div id="jwElement"></div>

<script>
    jwplayer("jwElement").setup({
        file: "{{ page.audioFile }}",
        width: '100%',
        height: 30
    });
</script>

This is testing out if this is working