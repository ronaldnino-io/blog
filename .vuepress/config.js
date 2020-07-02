module.exports =  {
    title: 'Ronald Niño',
    description: 'Aprendiz de tecnologías cloud',
    base: "/blog/",
    themeConfig: {
        nav: [
          { text: 'Inicio', link: '/' },
          { text: 'Ténica de Estudio', link: '/student/' },
          { text: 'Infraestructura de Software', link: '/infrastructure/' },
          { text: 'Desarrollo de Softaware', link: '/developer/' },
          { text: 'UX & UI', link: '/uxandui/' },
          { text: '¿Tienes preguntas?', link: 'https://google.com' }
        ],
        sidebar:{
            '/student/':[
                '',
                'Tips',
            ],
            '/infrastructure/':[
              '',
              'CloudComputing',
              'CloudNative',
            ],
            '/developer/':[
              '',
              'Java',
            ],
            '/uxandui/':[
              '',
              'UserExperience',
            ],
            
        }
      }
}