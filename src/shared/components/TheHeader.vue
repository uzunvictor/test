<template lang="pug">
.header
  .header__tabs
    .header__tab(@click="setActiveTab('Products')")
      .tab__content.header__tab-left(:class="{active: activeTab === 'Products' && !isDesktop}")
        span Products
    .header__tab(@click="setActiveTab('Feedback')")
      .tab__content.header__tab-right(:class="{active: activeTab === 'Feedback' && !isDesktop}")
        span Feedback
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useStoreHeader} from "@/stores/header";

// ------------------- state --------------------------->
const { activeTab, isDesktop } = storeToRefs(useStoreHeader())

// ------------------- functions ----------------------->
const { setActiveTab } = useStoreHeader()
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 64px;
  border-bottom: solid 1px $smoke_grey_light;

  &__tabs {
    width: 100%;
    height: 100%;
    display: flex;
  }

  &__tab {
    display: flex;
    background-color: $white;

    .tab {
      &__content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $smoke_grey_light;
        span {
          color: $black;
          text-align: center;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.4px;
        }
        &.active {
          background-color: $white;
          span {
            font-weight: 600;
            letter-spacing: 1px;
          }
        }
        @media (max-width: 1439.99px) {
          &:hover:not(.active), &:focus:not(.active) {
            span {
              color: $text_blue_light;
              text-decoration: dashed underline;
              text-underline-offset: 4px;
              text-decoration-thickness: 2px;
            }
          }
        }
      }
    }

    &:has(.tab__content.active) {
      background-color: $smoke_grey_light;
      .tab__content {
        background-color: $white;
      }
    }

    @media (max-width: 1439.99px) {
      cursor: pointer;
      flex-grow: 1;
      &-left {
        border-radius: 0 0 16px 0;
      }
      &-right {
        border-radius: 16px 0 0 0;
      }
    }
  }
}

@media (min-width: 1440px) {
  .header__tab {
    .tab__content{
      span {
        color: $black;
        text-align: center;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 1px;
      }
    }
    .tab__content.header__tab-right {
      width: 352px;
      background-color: $smoke_grey_light;
    }
    &:has(.tab__content.header__tab-left) {
      flex: 1;
      .tab__content {
        background-color: $white;
      }
    }
  }
}
</style>