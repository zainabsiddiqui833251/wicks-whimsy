import { NextResponse } from 'next/server';


// Define your blog data
const blog_data = [
    {
        id: 1,
        title: 'Mastering Candle Wax',
        image: '/images/blog1.png',
        description: 'In the world of candles, the wax used is more than just a fuel. It is an essential element that determines a candle burning time, scent throw, and overall performance.',
        author: 'by Candlewic',
        url: 'https://candlewic.com/learn/candlemaking-how-to/mastering-candle-wax-soy-beeswax-and-paraffin-advantages/',
    },
    {
        id: 2,
        title: 'Candle Wick Guide',
        image: '/images/blog2.png',
        description: 'While many factors dictate the size wick required to properly burn a candle, there are two that make the biggest difference: the type of wax and the diameter of the candle.',
        author: 'by Candle Science',
        url: 'https://www.candlescience.com/learning/wick-guide/',
    },
    {
        id: 3,
        title: 'Candles to Add to Your Collection',
        image: '/images/blog3.png',
        description: 'Before you get started on your collection, here is everything you need to know about the various types of candles, including pillar, taper, votives, and more.',
        author: 'by Patricia Shannon',
        url: 'https://www.bhg.com/types-of-candles-8638837',
    },
];

// Export a handler for the GET request
export async function GET() {
    return NextResponse.json(blog_data);
}
