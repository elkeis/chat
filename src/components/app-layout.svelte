<script lang="typescript">
  export let showSidebar: boolean = true;
</script>

<style type="text/scss">
  .app-layout {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 850px) {
      & {
        & > .sidebar {
          transition: all .5s;
          position: absolute;
          width: 100%;
          height: 100%;
          transform: translateX(-100%);
          box-sizing: border-box;

          &.show {
            transform: translateX(0);
          }
        }
      }
    }
    
    & > .sidebar {
      min-width: 400px;
      background: white;
      border-right: 1px solid rgb(218, 218, 218);
    }

    & > .main-view {
      width: 100%;
    }
  }
</style>


<div class="app-layout">
  <div class="sidebar" class:show={showSidebar}>
    <slot name="sidebar"></slot>
  </div>
  <div class="main-view">
    <slot name="main-view"></slot>
  </div>
</div>
