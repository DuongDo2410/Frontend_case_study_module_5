import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useEffect, useState } from "react";
export default function Share() {
  const [image, setImage] = useState();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview);
    };
  }, []);
  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };
  return (
    <div className="share">
      <div className="shareWrapper mx-4 py-4">
        <div className="shareTop flex mb-3">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
            onClick={() => setShowModal(true)}
          />
          {image && <img src={image.preview} alt="" />}
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions flex justify-between mt-3">
            <div className="shareOption">
              <input
                id="contained-button-file"
                className="hidden"
                type="file"
                onChange={handleChange}
              />
              <label htmlFor="contained-button-file" className="cursor-pointer">
                <PermMedia htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText">Photo or Video</span>
              </label>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>

          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div
                  className="relative w-auto my-6 mx-auto max-w-sm "
                  style={{ minWidth: "650px" }}
                >
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h6 className="text-2xl font-semibold ">Create Post</h6>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          <CloseRoundedIcon color="primary" />
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      {/*user*/}
                      <div className="flex items-center">
                        <div>
                          <img
                            className="shareProfileImg"
                            src="/assets/person/1.jpeg"
                            alt=""
                          />
                        </div>
                        <div>
                          <span>User Name</span>
                          <div>
                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1">
                              <option selected>Choose a country</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div></div>
                      <div></div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
