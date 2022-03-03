function SubscribeNewsLetterSection() {
    return (
        <section className="section_py text-center bg-[#1D1F20] border-b border_soft">
            <p className="heading_sm text-[30px] leading-[33px] text_spacing" style={{ textShadow: "4px 4px 0 #000" }}>Subscribe to our newsletter</p>
            <div className="md:w-[810px] mx-auto" >
                <form className="w-full flex items-center" >
                    <input type="text" placeholder="Email Address" className="grow h-[54px] text-[26px] font-praebrg border border-white/20 px-5 bg-transparent outline-none text-white placeholder:text-white duration-150 hover:border-white/80 focus:border-white focus:border-[2px]" />
                    <button
                        type="submit"
                        className="flex shrink-0 items-center bg-white px-[30px] gap-3 h-[54px] text-2xl font-praebrg font-medium relative group"
                        style={{
                            boxShadow: '4px 4px #c39e53'
                        }}
                    >Sign Up</button>
                </form>
            </div>
        </section>
    )
}

export default SubscribeNewsLetterSection
