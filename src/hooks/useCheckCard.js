

const useCheckCard = (id, array) => {
    return  array.some(item => item._id === id);
}

export default useCheckCard;