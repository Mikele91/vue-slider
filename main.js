
const app = new Vue({
    el:"#root",
    data:{
        imgs:["https://d2p1cf6997m1ir.cloudfront.net/media/c83opt/b6/b6/b6b6acd463a175acbfecee00278b56d8.jpg",
                "https://content.r9cdn.net/rimg/dimg/17/74/0ca6e469-city-30651-1632b88f203.jpg?width=1750&height=1000&xhint=2635&yhint=1507&crop=true",
                "https://www.robintur.it/img/viaggi/portogallo/image-thumb__6189__galleryCarousel/Lisbona-Piazza-del-Commercio~-~300w.pjpeg"
    
        ],
        imgIndex: 0,
        

    },
    methods:{
        nextImg: function(){
            this.imgIndex++;
            if( this.imgIndex >= this.imgs.length){
                this.imgIndex = 0;
            }
            
        },
        prevImg: function(){
            this.imgIndex--;
            if(this.imgIndex == -1){
                this.imgIndex = this.imgs.length-1;
            }

        },
        select: function(){
            this.imgIndex == i ;

        }
    },
    mounted: function() {
        let timing =setInterval(function(){ this.imgIndex++; }, 1000);
    }
        
})