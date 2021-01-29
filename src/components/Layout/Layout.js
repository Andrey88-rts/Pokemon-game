import styled from "./style.module.css"

export default function Layout({ id, title, urlBg, colorBg, children }) {
  const stylesUrl = {
    backgroundImage: `url(${urlBg})`
  }

  const stylesColor = {
    backgroundColor: colorBg
  }

  const stylesRoot = urlBg ? stylesUrl : stylesColor;


  return (
    <section className={styled.root} id={id} style={stylesRoot}>
      <div className={styled.wrapper}>
        <article>
          <div className={styled.title}>
            <h3>{title || "Not title"}</h3>
            <span className={styled.separator}></span>
          </div>
          <div className={[styled.desc, styled.full].join(' ')}>
            <p>{children}</p>
          </div>
        </article>
      </div>
    </section>
  )
}