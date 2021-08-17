import styled from "styled-components";

const HomeWrapper = styled.div`

.icon{
    width: 40px;
    height: 40px;
}
.icon1{
    color: #0E77B7;
}
.icon2{
    color: #0C53B7;
}
.icon3{
    color: #B78103;
}
.icon4{
    color: #b72136;
}
.icon5{
    color: #F8ED7F;
}

.cards {
    border-radius: 25px;
}
.card1{
    background-color: #D1FFFC;
    background: linear-gradient(315deg, #bce6e3, #e0ffff);
    box-shadow:  -8px -8px 7px #b8e0de,
             8px 8px 7px #eaffff;
}
.card2{
    background-color: #D0F2FF;
    background: linear-gradient(315deg, #bbdae6, #dfffff);
    box-shadow:  -8px -8px 7px #b7d5e0,
             8px 8px 7px #e9ffff;
}
.card3{
    background-color: #FFF7CD;
    background: linear-gradient(315deg, #e6deb9, #ffffdb);
    box-shadow:  -8px -8px 7px #e0d9b4,
             8px 8px 7px #ffffe6;
}
.card4{
    background-color: #FFE7D9;
    background: linear-gradient(315deg, #e6d0c3, #fff7e8);
    box-shadow:  -8px -8px 7px #e0cbbf,
             8px 8px 7px #fffff3;
}
.card5{
    background-color: #F2F346;
    background: linear-gradient(315deg, #dadb3f, #ffff4b);
    box-shadow:  -8px -8px 7px #d5d63e,
             8px 8px 7px #ffff4e;
}

.div{
    width: 65px;
    height: 65px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.div1{
    background-image: linear-gradient(
    135deg, rgba(14, 119, 183, 0) 0%, rgba(14, 119, 183, 0.24) 100%);
}
.div2{
    background-image: linear-gradient(
    135deg, rgba(12, 83, 183, 0) 0%, rgba(12, 83, 183, 0.24) 100%);
}
.div3{
    background-image: linear-gradient(
    135deg, rgba(183, 129, 3, 0) 0%, rgba(183, 129, 3, 0.24) 100%);
}
.div4{
    background-image: linear-gradient(
    135deg, rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 100%);
}
.div5{
    background-image: linear-gradient(
    135deg, rgba(183, 129, 3, 0.5) 0%, rgba(183, 129, 3, 0.24) 100%);
}
`;

export default HomeWrapper;