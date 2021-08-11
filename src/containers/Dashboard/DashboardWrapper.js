import styled from "styled-components";

const DashboardWrapper = styled.div`
    display: flex;
    .sidebar{
        width: 300px;
        /* background-color: white; */
        padding: 20px;
        height: 100vh;
        position: sticky;
        top: 0;
        p{
            padding: 10px 20px;
            box-sizing: border-box;
            list-style: none;
            font-weight: 700;
            line-height: 1.5;
            font-size: 0.75rem;
            letter-spacing: 1.1px;
            text-transform: uppercase;
            font-family: "Public Sans", sans-serif;
        }
        ul{
            li{
                a{
                    display: block;
                    padding: 10px 20px;
                    border-radius: 10px;
                    background-color: white;
                    margin-bottom: 10px;
                    color: #6f7e8a;
                    &:hover{
                        background-color: #F3F4F5;
                    }
                }
            }
        }
    }
    .rightside{
        flex: 1;
        position: relative;
        header{
            padding: 10px;
            position: sticky;
            top: 0;
            background: rgba( 255, 255, 255, 0.25 );
            backdrop-filter: blur( 2px );
            -webkit-backdrop-filter: blur( 4px );
            border: 1px solid rgba( 255, 255, 255, 0.18 );
            z-index: 1000;
            .search, .others{
                width: 30px;
                height: 30px;
                border-radius: 100%;
                text-align: center;
                &:hover{
                    background-color: #F3F4F5;
                    cursor: pointer;
                }
            }
            .user img{
                width: 45px;
                height: 45px;
                border-radius: 100%;
                margin-left: 20px;
            }
        }
        .content{
            padding: 20px;
        }
    }
`;

export default DashboardWrapper;