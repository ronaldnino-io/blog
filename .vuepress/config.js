module.exports =  {
    title: 'Ronald Niño',
    description: 'Aprendiz de tecnologías cloud',
    base: "https://ronaldnino-io.github.io/blog/",
    themeConfig: {
        nav: [
          { text: 'Inicio', link: '/' },
          { text: 'Temas', link: '/temas/' },
          { text: '¿Tienes preguntas?', link: 'https://google.com' }
        ],
        sidebar:{
            '/temas/':[
                '',
                'Feynman',
                'CloudNative'
            ]
        }
      }
}