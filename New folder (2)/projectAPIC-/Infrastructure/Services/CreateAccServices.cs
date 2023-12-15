using Design.Entity;
using Infrastructure.DataX;
using Infrastructure.ErrorHelper;
using Infrastructure.IServices;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Services
{
    public class CreateAccServices : ICreateAccount
    {
        private readonly AppDbContext dbcontext;
        public CreateAccServices()
        {
            dbcontext = new AppDbContext();
        }
        public async Task<ErrorHel> CreateAcc(List<ListAcc> listAccs)
        {
            using (var trans = dbcontext.Database.BeginTransaction())
            {
                try
                {
                    foreach (var acc in listAccs)
                    {
                        dbcontext.listAccs.Add(acc);
                    }
                    await dbcontext.SaveChangesAsync();
                    await trans.CommitAsync();
                    return ErrorHel.thanhCong ;
                }
                catch
                {
                    await trans.RollbackAsync();
                    return ErrorHel.thatBai;

                }
            }
        }
    }
}
