import { resolve } from "path";
let  fs = require('fs');
let  join = require('path').join;
/**
 * 
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function findSync(startPath:any) {
    let result:any=[];
    function finder(path:any) {
        let files=fs.readdirSync(path);
        files.forEach((val:any,index:any) => {
            let fPath=join(path,val);

            let stats=fs.statSync(fPath);
            if(stats.isDirectory()) finder(fPath);
            if(stats.isFile()) {
              
                result.push(fPath.replace('.md', '').replace('src/content','/docs'));
            }
        });

    }
    finder(startPath);
    return result;
}
let fileNames=findSync('./src/content/');
console.log(fileNames)
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // debug:true,
  // dev:true,
  sourcemap: {
    server: true,
    client: true
  },
  app: {
    rootId: "app",
    rootTag: 'div',
    cdnURL: 'https://www.aposeidon.cn/nuxt/'
  },
  buildDir: 'nuxt-dev',
  srcDir: 'src/',
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@vant/nuxt'
  ],

  content: {
    sources: {
      // overwrite default source AKA `content` directory
      content: {
        driver: 'fs',
        prefix: '/docs', // All contents inside this source will be prefixed with `/docs`
        base: resolve(__dirname, 'src/content')
      }
    }
  },
  ssr: true,
  devtools: { enabled: true },
  routeRules: {
    // '/list/**': { ssr: false },
  },

  nitro: {
    prerender: {
      routes: fileNames
    }
  },
  components: [
    {
      path: '~/components/',
      pathPrefix: false,
    },
  ],
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**'
    ]
  }
})
