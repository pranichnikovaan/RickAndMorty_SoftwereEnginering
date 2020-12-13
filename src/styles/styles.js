import background from "../assets/BackgroundLights.svg";

export default {
    main: {
      backgroundStyle: {
          backgroundColor: '#EBEBEA',
          backgroundImage: `url(${background})`,
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat'
      }
    },
    menu: {
        activeLinkStyle: {background: '#333333', color: 'white'},
        asideMenuStyle: {width: 300, background: 'rgba(245, 245, 244, .7)', height: 875}
    },
    offers: {
        elementBackground: {background: 'rgba(245, 245, 244, 0.7)', borderRadius: 16},
        btnAddBackground: {background: '#55EF14', cursor: 'pointer'}
    },
    apps: {
        search: {
            searchElement: {backgroundColor: '#EBEBEA', outline: 'none'},
            elementBackground: {
                backgroundColor: '#EBEBEA',
                boxShadow: 'inset 0px 0.5px 4px rgba(96, 97, 112, 0.32)',
                borderRadius: 8
            }
        }
    }

}