import user from "../../assets/icons/user.png";
import backArrow from "../../assets/icons/back-arrow.png";
import resize from "../../assets/icons/resize.png";
import rubbishButton from "../../assets/icons/rubbish-bin-delete-button.png";

const WriteEmail = () => {
  return (
    <div className="container">
      <img class="user-icon" src={user}></img>

      <div className="text-container">
        <div className="header-email">
          <img className="back-arrow" src={backArrow}></img>
          <img
            className="down-arrow"
            src="https://www.gstatic.com/images/icons/material/system/2x/arrow_drop_down_black_20dp.png"
          ></img>
          <p className="sender-info">Freepick Company (no-reply@freepik.com)</p>
          <img className="resize" src={resize}></img>
        </div>

        <textarea className="text" rows="20" cols="100"></textarea>

        <div className="footer">
          <img
            className="more-button"
            src="https://www.gstatic.com/images/icons/material/system/1x/more_horiz_black_20dp.png"
          ></img>
          <div class="button-container">
            <button className="send-button">Send</button>
            <button className="down-arrow-btn">
              <img
                className="down-arrow-footer"
                src="https://www.gstatic.com/images/icons/material/system/2x/arrow_drop_down_black_20dp.png"
              ></img>
            </button>
            <img
              className="text-icons"
              src="https://www.gstatic.com/images/icons/material/system/2x/text_format_black_20dp.png"
            ></img>
            <img
              className="text-icons"
              src="https://www.gstatic.com/images/icons/material/system/2x/attach_file_black_20dp.png"
            ></img>
            <img
              className="text-icons"
              src="https://www.gstatic.com/images/icons/material/system/2x/insert_link_black_20dp.png"
            ></img>
            <img
              className="text-icons"
              src="https://www.gstatic.com/images/icons/material/system/2x/insert_emoticon_black_20dp.png"
            ></img>
            <img
              className="text-icons"
              src="https://www.gstatic.com/images/icons/material/system/2x/drive_black_20dp.png"
            ></img>
            <img
              className="text-icons"
              src="https://www.gstatic.com/images/icons/material/system/2x/insert_photo_black_20dp.png"
            ></img>
            <img
              className="text-icons"
              src="https://www.gstatic.com/images/icons/material/system/2x/lock_clock_black_20dp.png"
            ></img>
            <img
              className="text-icons"
              src="https://www.gstatic.com/images/icons/material/system/2x/ink_pen_black_20dp.png#"
            ></img>
            <div class="delete-container"></div>
            <img
              className="text-icons right-icon"
              src="https://www.gstatic.com/images/icons/material/system/2x/more_vert_black_20dp.png"
            ></img>
            <img className="text-icons right-icon" src={rubbishButton}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WriteEmail;
