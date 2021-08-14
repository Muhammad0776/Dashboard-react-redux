import styled from "styled-components";

const DashboardWrapper = styled.div`
        /* background-image: url(../public/Frame.png);
        background-position: center;
        background-size: cover; */
        display: flex;

    .sidebar{
        flex-shrink: 0;
        width: 50px;
        overflow: hidden;
        /* background-image: linear-gradient(to right top, #051937, #10173a, #1c133b, #280e3a, #330537); */
        transition: 0.3s;
        height: 100vh;
        position: sticky;
        top: 0;
        padding-top: 20px;
        padding-bottom: 20px;
        transition: 0.5s;
    &:hover{
        width: 300px;
        padding: 20px;
    }
    

        &.show{
            width: 300px;
            padding: 20px;
        }
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
            position: absolute;
            top: 80px;
            left: 100px;
        }

        .iconLogo{
            width: 38px;
            height: 38px;
        }

        .toggle{
            cursor: pointer;
            width: 30px;
            height: 30px;
            border-radius: 100%;
            text-align: center;
            transition: 0.3s;
            position: absolute;
            top: 30px;
            left: 250px;

            &:hover{
                background: rgba( 187, 187, 187, 0.25 );
                backdrop-filter: blur( 4px );
                -webkit-backdrop-filter: blur( 4px );
                border: 1px solid rgba( 255, 255, 255, 0.18 );
            }

        }

        nav{
            li{
                a{
                    .MuiButtonBase-root{
                        display: block !important;
                        padding: 10px 20px  !important;
                        border-radius: 6px  !important;
                        background-color: rgba(255, 255, 255, 0.3)  !important;
                        margin-bottom: 10px  !important;
                        color: #798793 !important;
                        transition: 0.3s !important;
                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3) !important;
                        min-width: 200px !important;
                        overflow: hidden !important;
                        &:hover{
                            background-color: rgba(255, 255, 255, 0.5)  !important;
                        }
                }

                &.active{
                        .MuiButtonBase-root{
                            background-color: blue  !important;
                            color: white  !important;
                        }
                    }
            }
        }
    }
}
    .rightside{
        flex: 1;
        position: relative;
        header{
            padding: 20px;
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
                color: #111;
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