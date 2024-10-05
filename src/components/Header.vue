 <template>
<div class="header">
    <div class="links d-flex flex-row justify-content-end align-items-center gap-3">

            <router-link class="link d-flex align-items-center" to="/">menu</router-link>

            <router-link class="link d-flex align-items-center ms-3" to="/games">games</router-link>
 
            <router-link class="link d-flex align-items-center ms-3" to="/updates">updates</router-link>
            
        <div class="dropmenu">
          <button class="btn btn-light rounded-0 dropdown-toggle" data-bs-toggle="dropdown">
              Пока в работе
          </button>
              <ul class="dropdown-menu me-2 rounded-0 text-center ps-3 pe-3">
                    <li class="nav-item">
                        <router-link class="link dropdown-item ps-1 pe-1" to="/auth">Авторизация</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="link dropdown-item ps-1 pe-1" to="/reg">Регистрация</router-link>
                    </li>
              </ul>
        </div>
    </div>

  
</div>

  </template>
  
  <script>
    import { RouterLink } from 'vue-router'
  export default {
    data() {
      return {
        
      };
    },

  };
  </script>
  <style scoped lang="scss">
  .header{
    width: 100%;
    height: 50px;
    background-color: white;
    .links{
      height: 100%;
      @media(max-width: 450px){
        justify-content: center !important;
      }
    }
    .btn{
      height: 100%;
    }
  }
  .dropdown-menu{
    min-width: fit-content;
  }
  .link{
    color: black;
    text-decoration: none;
    height: calc(100% - 12px);
    position: relative;
    top: 2px;
    transition: all 0.3s linear;
    border-bottom: 4px solid rgba(0,0,0, 0);

  }
  .dropdown-item:focus {
    background-color: white;
    color: black;
}

 .activeLink{
    border-bottom: 4px solid rgb(55, 134, 55);
    background-color: rgba(0,0,0, 0);

  }
  .dropmenu{
    height: 100%;
  }

  </style> 