import styled from "styled-components";

export const StyledContentCard=styled.div`
width: 500px;
height: 500px;
display: flex;
flex-direction: column;

.box_img{
    width: 100%;
    height: 50%;
    display: contents;

    img{
        height: 250px;
        object-fit:cover;
        border-radius:8px 8px 0px 0px;
    }
}

.content_box{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
    padding: 20px;
    background-color:var(--color-brand3);
    border: 1px solid var(--color-brand3);
    border-radius: 0px 0px 8px 8px;
    color:var(--color-grey-10)

}

`