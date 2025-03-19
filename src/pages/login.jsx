
import Screen from "../components/Screen"
import SideA from "../components/SideA"
import SideB from "../components/SideB"

export default function Login(){
    return (    
        <Screen className=" flex w-full h-full ">
            <div className="absolute inset-0 bg-[url('/assets/bgimg.jpg')] bg-cover bg-left opacity-30 filter brightness-70"></div>
            <SideA className="flex items-center justify-center w-[50%] h-full p-[1%]">
                <div className=" w-full h-full relative z-10 flex items-center justify-center  ">
                    <img className=" max-w-[40%] max-h-[40%]" src="/assets/trbLogo.png" alt="TRB Logo" />
                </div>
            </SideA>    
            <SideB className="relative z-10 flex items-center justify-center w-[50%] h-full p-[1%]">
                <div className=" w-full h-full flex items-center justify-center">
                    <form className="w-[60%] h-[60%] bg-[#1F3574] flex flex-col gap-2 items-center justify-center rounded-[17px]">
                        <div className="w-[50%] flex items-center justify-center">
                            <input  className=" w-full h-[40px] rounded-[3px] bg-[#FFFFFF] indent-3  outline-none" type="email" 
                            placeholder="e-mail"/>
                        </div>
                        <div className="w-[50%] flex items-center justify-center bg-[#FFFFFF] rounded-[3px]">
                            <input  className=" w-full h-[40px] rounded-[3px] bg-[#FFFFFF] indent-3  outline-none" type="password" 
                            placeholder="senha"/>
                            <div className="w-[20%] cursor-pointer flex items-center justify-center p-1">
                                <svg width="70%" height="70%" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style={{ fillRule:   'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                                    <g id="eye-slash">
                                        <path d="M13.673,10.345l-3.097,3.096l39.853,39.854l3.097,-3.097l-39.853,-39.853Z"/>
                                        <path d="M17.119,19.984l2.915,2.915c-3.191,2.717 -5.732,6.099 -7.374,9.058l-0.005,0.01c4.573,7.646 11.829,14.872 20.987,13.776c2.472,-0.296 4.778,-1.141 6.885,-2.35l2.951,2.95c-4.107,2.636 -8.815,4.032 -13.916,3.342c-9.198,-1.244 -16.719,-8.788 -21.46,-17.648c2.226,-4.479 5.271,-8.764 9.017,-12.053Zm6.63,-4.32c2.572,-1.146 5.355,-1.82 8.327,-1.868c0.165,-0.001 2.124,0.092 3.012,0.238c0.557,0.092 1.112,0.207 1.659,0.35c8.725,2.273 15.189,9.649 19.253,17.248c-1.705,3.443 -3.938,6.803 -6.601,9.682l-2.827,-2.827c1.967,-2.12 3.607,-4.48 4.87,-6.769c0,0 -1.27,-2.042 -2.233,-3.324c-0.619,-0.824 -1.27,-1.624 -1.954,-2.395c-0.54,-0.608 -2.637,-2.673 -3.136,-3.103c-3.348,-2.879 -7.279,-5.138 -11.994,-5.1c-1.826,0.029 -3.582,0.389 -5.249,0.995l-3.127,-3.127Z" style={{ fillRule: 'nonzero' }}/>
                                        <path d="M25.054,27.92l2.399,2.398c-0.157,0.477 -0.243,0.987 -0.243,1.516c0,2.672 2.169,4.841 4.841,4.841c0.529,0 1.039,-0.085 1.516,-0.243l2.399,2.399c-1.158,0.65 -2.494,1.02 -3.915,1.02c-4.425,0 -8.017,-3.592 -8.017,-8.017c0,-1.421 0.371,-2.756 1.02,-3.914Zm6.849,-4.101c0.049,-0.001 0.099,-0.002 0.148,-0.002c4.425,0 8.017,3.593 8.017,8.017c0,0.05 0,0.099 -0.001,0.148l-8.164,-8.163Z"/>
                                    </g>
                                </svg>

                            </div>
                        </div>
                            
                        <button className=" w-[20%] h-[35px] rounded-[10px] bg-[#D1240E] text-center font-bold outline-none cursor-pointer text-[#FFFFFF] mt-[2%]" placeholder="Login">Login</button>
                        <div className="flex w-[50%] items-center justify-between mt-[2%]">
                            <div className="w-[37%] h-[1px] border-1 border-[#FFFFFF] opacity-50"></div>
                            <div className="text-[#FFFFFF]   border-[#FFFFFF] font-bold text-[12px] ">OU</div>
                            <div className="w-[37%] h-[1px] border-1 border-[#FFFFFF] opacity-50"></div>
                        </div>
                        <div className=" flex items-center justify-center text-center w-[70%]  h-[35px] rounded-[10px]  text-[#FFFFFF] font-bold cursor-pointer">
                            <h1 className="w-[50%] hover:brightness-150 hover:drop-shadow-[0_0_10px_#FFFFFF] transition-all duration-300">Cadastre-se</h1>
                        </div>
                    </form>
                </div>
            </SideB>
        </Screen>
    )
}