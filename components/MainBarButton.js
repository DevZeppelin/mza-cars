const MainBarButton = ({ logo, text, description1, description2, classType }) => {
    return (
        <div className="p-2 md:p-4 flex text-left cursor-pointer h-20 rounded-2xl">
            {logo}
            <div className="my-auto">
              <p className={classType}>{text}</p>
              <p>{description1}</p>
              <p>{description2}</p>
            </div>
          </div>
    )
}

export default MainBarButton