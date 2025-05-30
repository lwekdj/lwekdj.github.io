<script lang="ts" setup>
import { computed } from 'vue'
import type { LinkItem } from 'valaxy-theme-sakura/types/index.ts'
import { useLinkData, useThemeConfig } from 'valaxy-theme-sakura/composables/index.ts'

const props = defineProps<{
  links: string | LinkItem[]
  random: boolean
  /**
   * @description: 图片加载失败时显示的图片
   */
  errorImg?: string
}>()

const themeConfig = useThemeConfig()
const { data } = useLinkData(props.links, props.random)

const imageCard = computed(() => themeConfig.value.ui.links?.image)
</script>

<template>
  <div class="links">
    <ul class="link-items">
      <li v-for="link, i in data" :key="i" class="link-item">
        <a class="link-url" p="x-4 y-2" :href="link.url" :title="link.name" alt="portrait" rel="friend" target="_blank">
          <div class="link-left">
            <SakuraImageCard v-bind="imageCard" class="link-avatar" width="64" height="64" w="16" h="16" :src="link.avatar" :alt="link.name" :error-img="errorImg" />
          </div>
          <div class="link-info" m="l-2">
            <div class="link-blog" font="serif black">{{ link.blog }}</div>
            <div class="link-desc">{{ link.desc }}</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.link-item {
  display: inline-flex;
}

.links {
  .link-items {
    display: flex;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 0;
  }

  .link-url {
    --smc-link-color: var(--sakura-color-primary);

    display: inline-flex;
    text-align: center;
    justify-self: center;
    line-height: 1.5;
    margin: 0.5rem;
    transition: 0.2s;
    color: var(--sakura-color-primary, black);
    border: 1px solid var(--sakura-color-primary, gray);
    border-radius: var(--sakura-radius);

    &:hover {
      color: white;
      background-color: var(--sakura-color-primary, gray);
      box-shadow: 0 2px 20px var(--sakura-color-primary, gray);
    }

    .link {
      &-left {
        line-height: 0;
      }

      &-avatar {
        margin: 0;
        display: inline-flex;
        max-width: 100%;
        border-radius: 50%;
        background-color: oklch(100% 0 0);
        border: 1px solid var(--sakura-color-primary, gray);
        transition: 0.5s;

        &:hover {
          box-shadow: 0 0 20px oklch(0% 0 0 / 10%);
        }
      }

      &-desc {
        font-size: 0.8rem;
        width: 10rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }

  .link-info {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
