import styled from "styled-components";


export const StyledHeaderControls = styled.div`
display: flex;
align-items:center;
justify-content:center;
border-left:2px solid var(--color-grey-6);
padding: 10px;

.controls_box{
    gap:30px;
    display: flex;
    align-items: center;
    justify-content: center;


    .welcome{
        color:var(--color-grey-6);
        
    }
    .username{
        color:var(--color-brand2);

    }
}`