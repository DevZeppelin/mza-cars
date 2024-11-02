const MainBarButton = ({ logo, text,  description2 }) => {
    return (
        <div className="p-2 md:p-4 flex text-left text-base md:text-lg cursor-pointer h-auto md:h-20 rounded-2xl gap-2 text-liveColor">
            {logo}
            <div className="my-auto">
              {/*para pasar classname como prop:  <p className={classType}><b>{text}</b></p> */}
              <p className="text-secundary"><b>{text}</b></p>
              <p className="text-background">{description2}</p>
            </div>
          </div>
    )
}

export default MainBarButton