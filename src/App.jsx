import {useState,useEffect,useRef} from "react"
import {Hero} from "./components"
import './App.css'

function App() {
  const [theme,setTheme] = useState("light")
  const [circleSize,setCircleSize] = useState("20%")
  const appRef = useRef();



  onscroll=(e)=>{
    // console.log(window.pageYOffset);
    let headerHeight = 550;
    let percent = (window.pageYOffset/headerHeight).toFixed(2);
    console.log("percent",percent);
    let temp = 20 + (50 * percent);
    setCircleSize(`${temp}%`)
  }



  return (
    <div data-them={theme} className="app">
      <div className="app-content">
          <Hero circleSize={circleSize}/>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consequuntur nam corporis cumque soluta in ipsum, voluptatem quam aperiam fugit laborum unde laboriosam deleniti aut rem nostrum quisquam consectetur tenetur perspiciatis placeat, odit saepe a. Consequuntur quasi dolor laudantium dolore eveniet blanditiis. Quibusdam sequi sunt dolores labore fuga tenetur placeat officiis, possimus maxime porro, qui inventore! A eaque vero ullam magni sequi ad voluptate. Dolorem quisquam ad, eum dolore nisi odit dignissimos laborum fugit quaerat laudantium libero iusto dolorum commodi quam molestiae odio eligendi nostrum? Officiis ut nam accusantium aperiam aspernatur. Nihil et at a, ipsum odit omnis tempore dolorum illo suscipit necessitatibus laborum, quasi, repellat ad maiores asperiores porro iusto! Quam quis iste, impedit nisi neque animi quod tenetur repudiandae, voluptatibus consequuntur voluptatem. Facilis dignissimos quae quam consequatur aperiam accusantium modi, officia sunt a fugiat sapiente ut veniam molestiae ipsum nam ipsa. Quisquam nemo provident rerum minus doloribus corporis itaque consectetur! Pariatur, ab molestiae repudiandae ipsam perferendis veniam accusantium dolorem! Aut, vitae necessitatibus deserunt voluptatem dolor a enim debitis quasi non, fugiat officiis architecto quos laborum consequuntur ducimus quis expedita assumenda soluta eaque cupiditate? Animi mollitia nesciunt odio, ipsa ullam quidem consequatur nostrum incidunt necessitatibus sequi earum. Perferendis, minima?</h3>
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima fugit odit maxime similique provident at eos ducimus aperiam mollitia aut eligendi esse placeat ad adipisci atque alias voluptatum harum, nam, autem iure perspiciatis officiis architecto. Ipsam architecto id at eaque illum officia dignissimos magni distinctio! Cumque eveniet molestias aperiam! Quaerat tenetur, voluptatum nulla quasi cumque aspernatur, dolore provident eaque eius cupiditate illo odit aliquam sunt obcaecati laborum. Neque sequi consequuntur pariatur. Accusantium impedit excepturi eaque! Qui, adipisci deserunt delectus labore est accusamus corporis eos ducimus earum natus commodi nisi quis in ipsam placeat autem. Porro animi earum incidunt laudantium sit consectetur, ipsa suscipit eos vero ab totam molestias perspiciatis esse quasi, alias perferendis. Ipsam non omnis, perferendis suscipit obcaecati nostrum recusandae ab culpa eveniet saepe iste, ea provident nemo sit repellendus! Dignissimos atque maiores fugit impedit dicta, quis illum error minima, possimus voluptate incidunt asperiores corporis eius commodi nobis nihil. Doloremque voluptas illo rerum perspiciatis ipsa unde enim earum placeat minus quo architecto fuga praesentium dolores, maxime explicabo temporibus perferendis tenetur magnam exercitationem quas veniam! Soluta fugiat veniam ducimus ea hic nostrum perspiciatis aliquid voluptatibus iusto debitis consectetur reiciendis, non rerum consequuntur saepe iste repudiandae architecto enim eos laudantium dolorem beatae. Ex recusandae aliquid quidem, incidunt esse impedit, neque obcaecati, minus rem nulla omnis deleniti a rerum. Harum dignissimos fugit molestiae non recusandae, dicta ut natus ratione excepturi neque ipsam tempore nisi nobis iusto ad soluta eligendi obcaecati sequi doloribus impedit repellat! Dolorem tenetur quo autem non laboriosam repellendus quibusdam.</h2>
      </div>
    </div>
  )
}

export default App
