function Logo(props: any) {
    const {renderDefault, title} = props
  return (
    <div className="flex items-center space-x-2">
        <img 
        className="rounded-full object-cover"
        width={50}
        height={50}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwgUQspLakPlp-LdD2uSHET1aTkVEayDz2U_qhm_W2_A&s"
        alt="logo"
        />
        {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}

export default Logo