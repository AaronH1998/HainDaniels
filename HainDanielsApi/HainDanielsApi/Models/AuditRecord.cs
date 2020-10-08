using System;
using System.ComponentModel.DataAnnotations;

namespace HainDanielsApi.Models
{
    public class AuditRecord
    {
        [Key]
        public int ID { get; set; }
        public DateTime RecordDateTime { get; set; }

        public string User { get; set; } = "Demo";

        public string Event { get; set; }
        public string Description { get; set; }
    }
}
