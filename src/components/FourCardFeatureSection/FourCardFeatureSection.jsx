import "./FourCardFeatureSection.scss"
import texts from "../../texts"
import FeatureCard from "../FeatureCard/FeatureCard"
import IconKarma from "../icons/iconKarma"
import IconCalculator from "../icons/iconCalculator"
import IconSupervisor from "../icons/iconSupervisor"
import IconTeamBuilder from "../icons/iconTeamBuilder"

const FourCardFeatureSection = (props) => {
  return (
    <div className="container">
      <div className="header1">{texts.title1}</div>
      <div className="header2">{texts.title2}</div>
      <div className="content">{texts.content}</div>
      <div className="cards-container">
        <FeatureCard title={texts["card1-title"]} content={texts["card1-content"]}>
          <IconSupervisor />
        </FeatureCard>
        <FeatureCard title={texts["card2-title"]} content={texts["card2-content"]}>
          <IconTeamBuilder />
        </FeatureCard>
        <FeatureCard title={texts["card3-title"]} content={texts["card3-content"]}>
          <IconKarma />
        </FeatureCard>
        <FeatureCard title={texts["card4-title"]} content={texts["card4-content"]}>
          <IconCalculator />
        </FeatureCard>
      </div>

    </div>
  )
}

export default FourCardFeatureSection
