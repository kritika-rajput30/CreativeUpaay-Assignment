const LayoutIcon = ({ size = 24, color = "#000000" }) => {
    return (<svg width={size} height={size} viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4418_9931)">
<path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
</g>
<defs>
<clipPath id="clip0_4418_9931">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>);
};

const FilterIcon = ({ size = 24, color = "#000000" }) => {
    return (<svg width={size} height={size} viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4418_9865)">
<path d="M5.40002 2.09961H18.6C19.7 2.09961 20.6 2.99961 20.6 4.09961V6.29961C20.6 7.09961 20.1 8.09961 19.6 8.59961L15.3 12.3996C14.7 12.8996 14.3 13.8996 14.3 14.6996V18.9996C14.3 19.5996 13.9 20.3996 13.4 20.6996L12 21.5996C10.7 22.3996 8.90002 21.4996 8.90002 19.8996V14.5996C8.90002 13.8996 8.50002 12.9996 8.10002 12.4996L4.30002 8.49961C3.80002 7.99961 3.40002 7.09961 3.40002 6.49961V4.19961C3.40002 2.99961 4.30002 2.09961 5.40002 2.09961Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.93 2.09961L6 9.99961" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
</g>
<defs>
<clipPath id="clip0_4418_9865">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>);
};

const CalendarIcon = ({ size = 24, color = "#000000" }) => {
    return (<svg width={size} height={size} viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4418_9977)">
<path d="M8 2V5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16 2V5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.5 9.08984H20.5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.9955 13.6992H12.0045" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.29431 13.6992H8.30329" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.29431 16.6992H8.30329" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</g>
<defs>
<clipPath id="clip0_4418_9977">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>);
};
export {LayoutIcon, CalendarIcon, FilterIcon};