import "./FourCardFeatureSection.scss"
import texts from "../../texts"
import colors from "../../colors"
import FeatureCard from "../FeatureCard/FeatureCard"
import IconKarma from "../icons/IconKarma"
import IconCalculator from "../icons/IconCalculator"
import IconSupervisor from "../icons/IconSupervisor"
import IconTeamBuilder from "../icons/IconTeamBuilder"

const FourCardFeatureSection = (props) => {
  return (
    <div className="container">
      <div className="header1">{texts.title1}</div>
      <div className="header2">{texts.title2}</div>
      <div className="content">{texts.content}</div>
      <div className="cards-container">
        <FeatureCard title={texts["card1-title"]} content={texts["card1-content"]} color={colors.primaryCyan}>
          <IconSupervisor />
        </FeatureCard>
        <FeatureCard title={texts["card2-title"]} content={texts["card2-content"]} color={colors.primaryRed}>
          <IconTeamBuilder />
        </FeatureCard>
        <FeatureCard title={texts["card3-title"]} content={texts["card3-content"]} color={colors.primaryOrange}>
          <IconKarma />
        </FeatureCard>
        <FeatureCard title={texts["card4-title"]} content={texts["card4-content"]} color={colors.primaryBlue}>
          <IconCalculator />
        </FeatureCard>
      </div>

    </div>
  )
}

export default FourCardFeatureSection
