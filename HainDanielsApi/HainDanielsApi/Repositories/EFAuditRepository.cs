using HainDanielsApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace HainDanielsApi.Repositories
{
    public class EFAuditRepository : IApplicationRepository<AuditRecord>
    {
        private ApplicationDbContext context;

        public EFAuditRepository(ApplicationDbContext ctx)
        {
            context = ctx;
        }

        public IEnumerable<AuditRecord> GetItems()
        {
            return context.Audit;
        }

        public void SaveItem(AuditRecord record)
        {
            var auditRecordEntity = context.Audit.FirstOrDefault(p => p.ID == record.ID);

            if (auditRecordEntity == null)
            {
                auditRecordEntity = new AuditRecord();

                context.Audit.Add(auditRecordEntity);
            }

            auditRecordEntity.Description = record.Description;
            auditRecordEntity.Event = record.Event;
            auditRecordEntity.RecordDateTime = record.RecordDateTime;

            context.SaveChanges();
        }
    }
}
