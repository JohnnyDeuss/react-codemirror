"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[799],{40799:function(n,e,i){i.r(e),e.default="$baseFontSizeInPixels: 14;\n\n@function px2em ($font_size, $base_font_size: $baseFontSizeInPixels) {  \n  @return ($font_size / $base_font_size) + em; \n}\n\nh1 {\n  font-size: px2em(36, $baseFontSizeInPixels);\n}\nh2  {\n  font-size: px2em(28, $baseFontSizeInPixels);\n}\n.class {\n  font-size: px2em(14, $baseFontSizeInPixels);\n}\n\nnav {\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n\n  li { display: inline-block; }\n\n  a {\n    display: block;\n    padding: 6px 12px;\n    text-decoration: none;\n  }\n  \n  @each $animal in puma, sea-slug, egret, salamander {\n    .#{$animal}-icon {\n      background-image: url('/images/#{$animal}.png');\n    }\n  }\n}"}}]);