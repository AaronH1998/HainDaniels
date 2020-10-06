using CsvHelper;
using CsvHelper.Configuration;
using CsvHelper.TypeConversion;
using System;

namespace HainDanielsApi.Extensions
{
    public class RemoveWhiteSpaceFromIntConverter : Int32Converter
    {

        public override object ConvertFromString(string text, IReaderRow row, MemberMapData memberMapData)
        {
            if (String.IsNullOrWhiteSpace(text))
            {
                return 0;
            }


            return base.ConvertFromString(text, row, memberMapData);

        }
    }
}
