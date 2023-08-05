const pl = requrie('nodejs-polars');

const fooSeries = pl.Series("foo", [1, 2, 3]);
fooSeries.some();
