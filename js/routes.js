const PATHS = {
    home: {
        path: "/",
        template: `
            <!--<app-nav-bar></app-nav-bar>-->
            <h1>🏠 Home</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum harum aliquam reiciendis dignissimos? Perferendis consequuntur vitae fugiat fuga neque ipsum?</p>
            <img src="https://source.unsplash.com/random/400x300" alt="Random Image">
        `,
    },
    game: {
        path: "/game",
        template: `
            <app-nav-bar></app-nav-bar>
            <h1 class="username">👩🏻‍💻 Nombre usuario</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum harum aliquam reiciendis dignissimos? Perferendis consequuntur vitae fugiat fuga neque ipsum?</p>
            <img src="https://source.unsplash.com/random/500x400" alt="Random Image">
        `,
    },
    // blog: {
    //     path: "/blog",
    //     template: `
    //         <h1>📱 Blog</h1>
    //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum harum aliquam reiciendis dignissimos? Perferendis consequuntur vitae fugiat fuga neque ipsum?</p>
    //         <img src="https://source.unsplash.com/random/600x500" alt="Random Image">
    //     `,
    // },
}