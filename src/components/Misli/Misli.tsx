
import { BsChatDots } from "react-icons/bs";
import { IoStatsChartSharp } from "react-icons/io5";
import { TbCircleLetterC } from "react-icons/tb";
import { TbCircleNumber1Filled } from "react-icons/tb";
import { IoIosArrowDropdown } from "react-icons/io";

import "./Misli.scss"


const Misli = () => {
    return (
        <div className="misli">
            <div className="clock">
                <p>20.00</p>
            </div>

            bura yaz men copy edecem 
            parolu yaz ora

            <div className="club">
                <div className="clubName">
                    <p>Belçika(Q)</p>
                    <p>Italiya (Q)</p>
                </div>

                <div className="clubIcons">
                    <BsChatDots className="chatIcon" />
                    <IoStatsChartSharp className="chartsharp" />
                    <TbCircleLetterC className="letterC" />
                    <TbCircleNumber1Filled className="number1" />
                </div>
            </div>



            <div className="firstScores">
                <div>
                    <p>5.13</p>
                </div>

                <div>
                    <p>5.13</p>
                </div>

                <div>
                    <p>5.13</p>
                </div>
            </div>

            <div className="secondScores">
                <div>
                    <p>2.23</p>
                </div>

                <div>
                    <p>5.13</p>
                </div>

                <div>
                    <p>5.13</p>
                </div>
            </div>

            <div className="thirdScores">
                <div>
                    <p>1.95</p>
                </div>

                <div>
                    <p>5.13</p>
                </div>

                <div>
                    <p>5.13</p>
                </div>
                <div className="divForStatistica">
                    <p>+338<IoIosArrowDropdown />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Misli     