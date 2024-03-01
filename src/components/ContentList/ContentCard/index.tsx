import { Idata } from "../../../providers/ContentContext"
import { StyledBigButton } from "../../../styles/buttons"
import { BodyTwo400, ButtonBigText, HeadingSix600 } from "../../../styles/typhography"
import { StyledContentCard } from "./style"

interface ICardProps{
    iten:Idata
}
export const ContentCard=({iten}:ICardProps)=>{

    return(

        <StyledContentCard>
            <div className="box_img">
                <img src={iten.image} alt="Imagem" />
            </div>
            <div className="content_box">
                <HeadingSix600>{iten.title}</HeadingSix600>
                <BodyTwo400>{iten.introduction}</BodyTwo400>

            {iten.id != "2"? <StyledBigButton color="outline2"><ButtonBigText>Saiba mais</ButtonBigText></StyledBigButton>:null
 }
            </div>
        </StyledContentCard>
    )
}