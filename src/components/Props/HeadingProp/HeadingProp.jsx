 import './HeadingProp.scss'

const HeadingProp = ({mainText, subText}) => {
  return (
    <div className="Heading__wrapper">
       <h1 className="Heading__Text">{mainText}</h1>
       <p className="Heading__Subtext">{subText}</p>
    </div>
  )
}

export default HeadingProp
