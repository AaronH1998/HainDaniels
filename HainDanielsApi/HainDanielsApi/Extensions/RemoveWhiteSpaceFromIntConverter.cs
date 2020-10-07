using CsvHelper;
using CsvHelper.Configuration;
using CsvHelper.TypeConversion;

namespace HainDanielsApi.Extensions
{
    public class RemoveWhiteSpaceFromIntConverter : Int32Converter
    {

        public override object ConvertFromString(string text, IReaderRow row, MemberMapData memberMapData)
        {
            if (string.IsNullOrWhiteSpace(text))
            {
                if (memberMapData.IsOptional)
                {
                    return null;
                }

                return 0;
            }


            return base.ConvertFromString(text, row, memberMapData);

        }
    }
}
