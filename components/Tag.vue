<template>
    <span :class="theme">{{title}}</span>
</template>

<script>

    export default {
        props: [
            "title",
            "theme"
        ]
    }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
@mixin setTagColor($color) {
    color: $color;
    background-color: rgba($color, 0.15);
}
span {
    display: inline-block;
    font-family: "Proxima Nova";
    font-size: 9px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    line-height: 22px;
    height: 20px;
    padding-left: $space-tiny;
    padding-right: $space-tiny;
    margin-bottom: $space-small;
    border-radius: $space-small;
}
.red {
    @include setTagColor($brand-action-primary);
}
.burple {
    @include setTagColor(#4540C2);
}
.mint {
    @include setTagColor(#2F7D89);
}
.blue {
    @include setTagColor(#335EAD);
}
.orange {
    @include setTagColor(#FF4F00);
}
.raspberry {
    @include setTagColor(#AA00B6);
}
.green {
    @include setTagColor(#03A000);
}
.gold {
    @include setTagColor(#AC7F00);
}
.gray {
    @include setTagColor(#677077);
}


</style>