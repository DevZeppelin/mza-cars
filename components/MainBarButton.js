const MainBarButton = ({ logo, text, description1, description2, classType }) => {
    return (
        <div className="p-2 md:p-4 flex text-left text-base md:text-lg cursor-pointer h-auto md:h-20 rounded-2xl gap-2">
            {logo}
            <div className="my-auto">
              <p className={classType}><b>{text}</b></p>
              <p>{description1}</p>
              <p>{description2}</p>
            </div>
          </div>
    )
}

export default MainBarButton