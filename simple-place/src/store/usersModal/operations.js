import actions from "./actions";

const setNewShowModal = (isShowModal) => (dispatch, getState) => {
  dispatch(actions.setShowModal(isShowModal));
};

const setNewModalType = (type) => async (dispatch, getState) => {
  const response = await fetch("/api/user/get-subscribers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: "7ff1ed10-a52f-11ec-a693-2dd56238e59e" }),
  })
    .then((res) => res.json())
    .then((data) => {
      //поставитьЮзеровДляМодалки(data)
      // вынести это в отдельный экшн и операцию
      dispatch(actions.setModalType(type));
    });
};

const operationsObj = { setNewShowModal, setNewModalType };

export default operationsObj;
