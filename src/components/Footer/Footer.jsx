import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <section>
      <div className="container footer__container">
        <div className="footer__rows">
          <a href="">Obchodní podmínky</a>
          <a href="">Zpracování soukromí</a>
        </div>
        <div className="copyright">
          <p>Copyright © 2022           <a href="http://kurzy_kresleni.cz/">Kurzy kreslení</a></p>
        </div>
      </div>
    </section>
  )
}

export default footer